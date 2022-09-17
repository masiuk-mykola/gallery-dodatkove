import { Component } from 'react';
import { Container } from './Container/Container';
import { FavoriteImg } from './FavoriteImg/FavoriteImg';
import { ImagesList } from './ImagesList/ImagesList';
import SelectSizesExample from './Select/Select';

const options = [
  { title: 'favorite', component: <FavoriteImg /> },
  { title: 'images', component: <ImagesList /> },
];

export class App extends Component {
constructor() {
  super()
  this.deleteFavoriteImg = this.deleteFavoriteImg.bind(this)
}

  state = {
    favoriteImg: [],
    select: null,
  };

  addFavoriteImg = img => {
    if (this.state.favoriteImg.includes(img)) {
      if (!window.confirm('Ти точно хочеш додати цю картинку?')) {
        return;
      }
    }
    this.setState(prevState => ({
      favoriteImg: [...prevState.favoriteImg, img],
    }));
  };

  deleteFavoriteImg(img) {
    this.setState(prevState => {
      return {
        favoriteImg: prevState.favoriteImg.filter(item => item !== img)
      }
    })

  } 

  handleChangeSelect = ({ target: { value } }) => {
    this.setState({ select: value });
  };

  render() {
    return (
      <>
        <Container>
          <SelectSizesExample
            options={options}
            onChange={this.handleChangeSelect}
          />

          {this.state.select === 'images' && (
            <ImagesList addImg={this.addFavoriteImg} />
          )}
          {this.state.select === 'favorite' && (
            <FavoriteImg favoriteImg={this.state.favoriteImg} deleteImg={this.deleteFavoriteImg}/>
          )}
        </Container>
      </>
    );
  }
}
