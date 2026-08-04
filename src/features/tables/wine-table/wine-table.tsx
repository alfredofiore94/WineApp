import type { Wine } from "../../../models/wine";
import { WineCard } from "../../Wines/card/wine-card";
import "./wine-table.css";
export function WinesHomeTable(wines: Wine[]) {
  return (
    <table>
      <tr>
        <td>
          <WineCard
            name={wines[0].name}
            id={wines[0].id}
            vintage={null}
            type={wines[0].type}
            winery={null}
            region={null}
            country={wines[0].country}
            averageRating={null}
            ratingsCount={null}
            confidence={0}
          ></WineCard>
        </td>
        <td>
          <WineCard {...wines[1]}></WineCard>
        </td>
        <td>
          <WineCard {...wines[2]}></WineCard>
        </td>
      </tr>
      <tr>
        <td>
          <WineCard {...wines[3]}></WineCard>
        </td>
        <td>
          <WineCard {...wines[4]}></WineCard>
        </td>
        <td>
          <WineCard {...wines[5]}></WineCard>
        </td>
      </tr>
      <tr>
        <td>
          <WineCard {...wines[6]}></WineCard>
        </td>
        <td>
          <WineCard {...wines[7]}></WineCard>
        </td>
        <td>
          <WineCard {...wines[8]}></WineCard>
        </td>
      </tr>
      <tr>
        <td>
          <WineCard {...wines[9]}></WineCard>
        </td>
      </tr>
    </table>
  );
}
