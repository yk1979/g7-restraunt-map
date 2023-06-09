import { memo } from "react";
import { useRecoilState } from "recoil";
import { Restaurant } from "../../pages";

// memo: 一旦アナログのデータを使用するが、後でAPI返り値が入るように変えること
// import { RESTAURANTS } from "../../mock/restaurants";
import { selectedMarkerState } from "../Map";

import styles from "./style.module.css";

type Props = {
  items: Restaurant[];
};

const ShopInfoComponent: React.FC<Props> = ({ items }) => {
  const [selectedMarker] = useRecoilState(selectedMarkerState);
  return (
    <div className={styles.shop_info}>
      <ul className={styles.shop_list}>
        {items.map((item, index) => {
          const shopId = `${item.lat}+${item.lng}`;
          return (
            <li
              key={shopId}
              data-state={shopId === selectedMarker}
              className={styles.shop_data}
            >
              <div className={styles.shop_name}>
                {index + 1}.&nbsp;{item.name}
                <span className={styles.user_name}>
                  -&nbsp;{item.user}&nbsp;さんがおすすめ&nbsp;
                </span>
              </div>
              <p className={styles.comment}>{item.comment}</p>
              <p className={styles.address}>
                〒104-0061 東京都中央区銀座８丁目１０−４的な住所
              </p>
              <a className={styles.url} href={item.url}>
                {item.url}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export const ShopInfo = memo(ShopInfoComponent);
