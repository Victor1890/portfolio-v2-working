import type { NextApiRequest, NextApiResponse } from "next"
import { BetaAnalyticsDataClient } from "@google-analytics/data"

// 👇 Setting PropertyId
const propertyId = process.env.NEXT_PUBLIC_GA_PROPERTY_ID
const DAYS = 30;

const analyticsDataClient = new BetaAnalyticsDataClient({
  credentials: {
    client_email: process.env.NEXT_PUBLIC_GA_CLIENT_EMAIL,
    private_key: process.env.NEXT_PUBLIC_GA_PRIVATE_KEY?.replace(/\n/gm, "\n"),
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

  const totalVisitors = response.rows?.reduce((acc: number, row: any) => acc += parseInt(row.metricValues[0].value), 0) || 0;

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=43200, stale-while-revalidate=21600"
  );

  return res.status(200).json(totalVisitors);
}
