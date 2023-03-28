import { memo } from "react";
// memo: 一旦アナログのデータを使用するが、後でAPI返り値が入るように変えること
import { RESTAURANTS } from "../../mock/restaurants";

import styles from "./style.module.css";

const ShopInfoComponent: React.FC = () => {

  return (
    <div className={styles.shop_info}>
      <ul className="shop_info-list">

        {RESTAURANTS.map((item,index) => (
          <li className={styles.shop_data}>
            <div className={styles.shop_name}><span className="shop_info-num">{index + 1}.&nbsp;</span>{item.name}</div>
            <p className={styles.comment}>
              slackコメントがここに入りますslackコメントがここに入りますslackコメントがここに入りますslackコメントがここに入ります
            </p>
            </li>
        ))}

      </ul>
    </div>
  );

};

export const ShopInfo = memo(ShopInfoComponent);
