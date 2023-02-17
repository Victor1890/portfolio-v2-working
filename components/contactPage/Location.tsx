import MyInfo from "../MyInfo"

export default function Location() {
  return (
    <div className="p-12">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121090.56400279568!2d-70.01692049815597!3d18.480029480026282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf8838def1b6f5%3A0x29143f1c70ffcd9f!2sDistrito%20Nacional%2C%20Santo%20Domingo!5e0!3m2!1sen!2sdo!4v1676482816060!5m2!1sen!2sdo"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-96"
      ></iframe>
      <ul className="grid grid-cols-1 mt-10 location sm:grid-cols-2 gap-y-2">
        <MyInfo field="address" value="National District, Dominican Republic" />
        <MyInfo field="email" value="victorrosariodeveloper@gmail.com" />
        <MyInfo field="freelance" value="Available" />
      </ul>
    </div>
  )
}
