import {ReactComponent as Delete} from "../../icons/bin2.svg";

export const FavoriteImg = ({ favoriteImg, deleteImg }) => {
  console.log(favoriteImg);
  console.log(Delete);
  return (
    <ul>
      {favoriteImg.map((item, id) => (
        <li key={id}>
          <img src={item} alt={item} width="300" />
          <Delete onClick={() => deleteImg(item)} style={{width:"32px", height:"32px", fill:'black', display:"block"}}/>
        </li>
      ))}
    </ul>
  );
};
