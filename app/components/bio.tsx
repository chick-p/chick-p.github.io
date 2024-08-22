import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";


import nextConfig from "../../next.config.mjs";
const BASE_PATH = nextConfig.basePath || "";

import style from "../styles/bio.module.scss";
import { Config } from "../config";

function BioAuthor({author}) {
  return (
    <div>
      <div className={style.author__name}>{author.name}</div>
      <div className={style.author__role}>{author.role}</div>
    </div>
  );
}

function BioLink({
  items,
}: {
  items: Array<{
    id: string;
    icon: string;
    url: string;
  }>;
}) {
  return (
    <div className={style.link__container}>
      <ul className={style.link__list}>
        {items.map(({ id, icon, url }) => (
          <li className={style.link__list__item} key={id}>
            <Link href={url}>
              <Icon icon={icon} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Profile() {
  return (
    <div className={style.container}>
      <Image
        src={`${BASE_PATH}/profile.png`}
        width={75}
        height={75}
        alt={Config.author.name}
      />
      <div className={style.author__container}>
        <BioAuthor author={Config.author} />
        <BioLink items={Config.media} />
      </div>
    </div>
  );
}
