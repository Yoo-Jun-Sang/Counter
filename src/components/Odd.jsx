import { useEffect } from "react";

const Odd = () => {
  useEffect(() => {return () => {console.log("언마운트 되었습니다.");};}, [])
  return <div>홀수입니다.</div>
};

export default Odd;