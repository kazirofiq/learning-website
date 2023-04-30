import { useEffect, useState } from "react"

const useIsAdmin = uid => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (uid) {
      fetch(`https://learn-with-rakib-server-three.vercel.app/admin/uid?uid=${uid}`)
        .then(res => res.json())
        .then(user => {
          if (user?.uid) {
            setIsAdmin(true);
          }
          setIsLoading(false);
        })
        .catch(err => console.error(err));
    }
  }, [uid]);
  return [isAdmin, isLoading];
}

export default useIsAdmin;