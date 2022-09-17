import { Component } from 'react';
import { getImages } from 'services/imagesAPI';

export class ImagesList extends Component {
  state = {
    images: [],
  };

  handleClickLoad = () => {
    getImages().then(res => {
      this.setState(prevState => ({
        images: [...prevState.images, ...res.hits],
      }));
    });
  };

  render() {
    const { images } = this.state;
    const { handleClickLoad } = this;
    return (
      <>
        <button type="button" onClick={handleClickLoad}>
          Load collection
        </button>
        <ul>
          {images.map(({ webformatURL, tags, id }) => (
            <li
              key={id}
              onClick={() => {
                this.props.addImg(webformatURL);
              }}
            >
              <img src={webformatURL} alt={tags} width="300" />
            </li>
          ))}
        </ul>
      </>
    );
  }
}
