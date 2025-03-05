import { useRouter } from "next/navigation";

export default function DetailPage() {
  const router = useRouter();
  return <h1>{router.query.slug}</h1>;
}
