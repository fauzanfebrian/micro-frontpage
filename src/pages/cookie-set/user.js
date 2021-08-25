import { useRouter } from "next/router";
import React, { useEffect } from "react";

export default function user() {
  const router = useRouter();
  const { name, thumbnail, path } = router.query;

  useEffect(() => {
    if (name && thumbnail && path) {
      const expires = new Date(new Date().getTime * 7 * 24 * 60 * 60 * 1000);
      const userCookie = { name, thumbnail };
      window.document.cookie = `BWAMICRO:user=${JSON.stringify(
        userCookie
      )}; expires=${expires.toUTCString()}; path=/;`;
      window.location = `${process.env.NEXT_PUBLIC_MEMBERPAGE_HOST}${path}`;
    }
  });
  return <div>Hello</div>;
}
