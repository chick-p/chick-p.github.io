import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

import type { Author, Media } from "@/config";
import { config } from "@/config";

import style from "@/styles/bio.module.css";

function BioAuthor({ author }: { author: Author }) {
  return (
    <div>
      <div className={style.author__name}>{author.name}</div>
      <div className={style.author__role}>{author.role}</div>
    </div>
  );
}

function BioLink({ items }: { items: Array<Media> }) {
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

export default function Bio() {
  return (
    <div className={style.container}>
      <Image
        src={`/profile.png`}
        width={75}
        height={75}
        alt={config.author.name}
      />
      <div className={style.author__container}>
        <BioAuthor author={config.author} />
        <BioLink items={config.media} />
      </div>
    </div>
  );
}
