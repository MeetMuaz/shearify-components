import React, { useState } from "react";

export default function AvailabilityStep() {
  const [facebook, setFacebook] = useState<string>("");
  const [tiktok, setTiktok] = useState<string>("");
  const [twitter, setTwitter] = useState<string>("");
  const [instagram, setInstagram] = useState<string>("");

  return <div>AvailabilityStep</div>;
}
