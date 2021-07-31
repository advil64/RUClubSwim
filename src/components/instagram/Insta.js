import React from "react";
import CardColumns from "react-bootstrap/CardColumns";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";

function getImages(response) {
  return response.data.user.edge_owner_to_timeline_media.edges.map((edge) => ({
    url: edge.node.display_url,
    caption: edge.node.edge_media_to_caption.edges[0].node.text,
    id: edge.node.id,
  }));
}

export default class Instagram extends React.Component {
  state = {
    loading: true,
    swimPosts: null,
    width: 0,
    height: 0,
  };

  async componentDidMount() {
    this.updateWindowDimensions();
    const url = `https://www.instagram.com/graphql/query/?query_hash=7c8a1055f69ff97dc201e752cf6f0093&variables={%22id%22:%225078829491%22,%22first%22:6}`;
    const response = await fetch(url);
    const data = await response.json();
    const posts = getImages(data);
    this.setState({ swimPosts: posts, loading: false });
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    if (this.state.loading || !this.state.swimPosts) {
      return (
        <div>
          <h3>Loading...</h3>
        </div>
      );
    } else if (this.state.width > 550) {
      return (
        <CardColumns>
          {this.state.swimPosts.map((post) => (
            <Card.Img
              className="pt-2 pb-2"
              key={post.id}
              src={post.display_url}
              alt={post.caption}
            />
          ))}
        </CardColumns>
      );
    } else if (this.state.width <= 550) {
      return (
        <Carousel className="pb-2">
          {this.state.swimPosts.map((post) => (
            <Carousel.Item>
              <img
                className="cropped1"
                key={post.id}
                src={post.url}
                alt={post.caption}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      );
    }
  }
}
