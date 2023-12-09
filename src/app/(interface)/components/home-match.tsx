import Image from "next/image";
import Link from "next/link";

function HomeMatch() {
  return (
    <div className="col-lg d-flex align-items-center mb-5 ms-5 me-5">
      <Link href="/match">
        <div>
          <Image
            src="https://cdn.nba.com/manage/2023/05/2-BOS-MIA-Full-Game-Highlights-Recap-YT-Thumbnail-Playoffs-2023.png"
            alt="flag"
            width="500"
            height="250"
            quality="100"
            className="img-thumbnail"
          />
        </div>
      </Link>
    </div>
  );
}

export default HomeMatch;
