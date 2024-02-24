import { useRouter } from "next/router";

function CarDetail() {
    const router = useRouter();
    const {cardId} = router.query;
    console.log(cardId)
  return (
    <div>CarDetail</div>
  )
}

export default CarDetail