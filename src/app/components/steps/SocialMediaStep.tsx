import React, { useState } from "react";

export default function SocialMediaStep() {
  const [facebook, setFacebook] = useState<string>("");
  const [tiktok, setTiktok] = useState<string>("");
  const [twitter, setTwitter] = useState<string>("");
  const [instagram, setInstagram] = useState<string>("");

  return <div>SocialMediaStep</div>;
}
