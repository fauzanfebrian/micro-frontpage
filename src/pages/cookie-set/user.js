import { useRouter } from "next/router";
import React, { useEffect } from "react";

export default function user() {
  const router = useRouter();
  const { name, thumbnail } = router.query;

  useEffect(() => {
    const expires = new Date(new Date().getTime * 7 * 24 * 60 * 60 * 1000);
    const userCookie = { name, thumbnail };
    window.document.cookie = `BWAMICRO:user=${JSON.stringify(
      userCookie
    )}; expires=${expires.toUTCString()}; path=/;`;
  });
  return <div>Hello</div>;
}
