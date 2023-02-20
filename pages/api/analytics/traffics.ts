import type { NextApiRequest, NextApiResponse } from "next"
import { BetaAnalyticsDataClient } from "@google-analytics/data"
import config from "../../../config";

// 👇 Setting PropertyId
const propertyId = config.googleAnalytics.propertyId
const DAYS = 7;

const analyticsDataClient = new BetaAnalyticsDataClient({
  credentials: {
    client_email: config.googleAnalytics.client_email,
    private_key: config.googleAnalytics.private_key.replace(/\n/gm, "\n"),
  },
})

export default async function handler(_: NextApiRequest, res: NextApiResponse) {

  const [response] = await analyticsDataClient.runReport({
    property: `properties/${propertyId}`,
    dateRanges: [
      {
        startDate: `${DAYS}daysAgo`, //👈  e.g. "7daysAgo" or "30daysAgo"
        endDate: "today",
      },
    ],
    dimensions: [
      {
        name: "year", // data will be year wise
      },
    ],
    metrics: [
      {
        name: "activeUsers", // it returs the active users
      },
    ],
  });

  let totalVisitors = 0;
  
  response.rows?.forEach((row: any) => {
    totalVisitors += parseInt(row.metricValues[0].value)
  });

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=43200, stale-while-revalidate=21600"
  );

  return res.status(200).json(totalVisitors);
}
