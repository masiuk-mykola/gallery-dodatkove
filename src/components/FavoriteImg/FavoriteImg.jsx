export const FavoriteImg = ({ favoriteImg }) => {
  console.log(favoriteImg);
  return (
    <ul>
      {favoriteImg.map((item, id) => (
        <li key={id}>
          <img src={item} alt={item} width="300" />
        </li>
      ))}
    </ul>
  );
};
