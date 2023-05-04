import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title}Learn With Rakib`;
    }, [title])
};

export default useTitle;