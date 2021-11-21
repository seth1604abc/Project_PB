import React from "react";
import { ProGallery } from "pro-gallery";
import "pro-gallery/dist/statics/main.css";
const Gallery = () => {
  const items = [
    {
      // Image item:
      itemId: "1",
      mediaUrl:
        "https://media.decathlon.tw/media/catalog/product/cache/10/image/9df78eab33525d08d6e5fb8d27136e95/e/4/e47b62c4-1798-40ee-8234-032356f22e28_8756638.jpg",
      metaData: {
        type: "image",
        height: 200,
        width: 100,
        title: "sample-title",
        description: "sample-description",
        focalPoint: [0, 0],
        link: {
          url: "http://example.com",
          target: "_blank",
        },
      },
    },
    {
      // Another Image item:
      itemId: "2",
      mediaUrl:
        "https://media.decathlon.tw/media/catalog/product/cache/10/image/438x/9df78eab33525d08d6e5fb8d27136e95/1/a/1a1248b0-0f8e-4141-bc8a-34273db5d218_8756638.jpg",
      metaData: {
        type: "image",
        height: 200,
        width: 100,
        title: "sample-title",
        description: "sample-description",
        focalPoint: [0, 0],
        link: {
          url: "http://example.com",
          target: "_blank",
        },
      },
    },
    {
      // Another Image item:
      itemId: "3",
      mediaUrl: "https://media.decathlon.tw/media/catalog/product/cache/10/image/9df78eab33525d08d6e5fb8d27136e95/5/5/55bac6d1-5b5b-428c-8267-7a23295e104b_8756638.jpg",
      metaData: {
        type: "image",
        height: 200,
        width: 100,
        title: "sample-title",
        description: "sample-description",
        focalPoint: [0, 0]
      }
    },
    {
      // Another Image item:
      itemId: "3",
      mediaUrl: "https://media.decathlon.tw/media/catalog/product/cache/10/image/9df78eab33525d08d6e5fb8d27136e95/3/d/3d61c86b-e629-4a04-9a88-6611abbd7d60_8756638.jpg",
      metaData: {
        type: "image",
        height: 200,
        width: 100,
        title: "sample-title",
        description: "sample-description",
        focalPoint: [0, 0]
      }
    }
  ];

  // The options of the gallery (from the playground current state)
  const options = {
    galleryLayout: 3,
    cubeType: "cover",
    galleryThumbnailsAlignment: "left",
    hoveringBehaviour: "NEVER_SHOW",
    isAutoSlideshow: false,
    slideshowLoop: false,
    autoSlideshowInterval: 3,
    thumbnailSpacings: 1,
    thumbnailSize: 150,
    slideAnimation: 'DECK',
    
  };

  // The size of the gallery container. The images will fit themselves in it
  const container = {
    width: 650,
    height: 500,
  };

  // The eventsListener will notify you anytime something has happened in the gallery.
  // const eventsListener = (eventName, eventData) =>
  //   console.log({ eventName, eventData });

  // The scrollingElement is usually the window, if you are scrolling inside another element, suplly it here
  const scrollingElement = window;
  return (
    <>
      <ProGallery
        //   domId={domId}
        items={items}
        options={options}
        container={container}
        scrollingElement={() => document.getElementById("gallery") || window}
        eventsListener={(eName, eData) => console.log({ eName, eData })}
      />
    </>
  );
};

export default Gallery;
