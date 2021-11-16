import React from "react";
import { ProGallery } from "pro-gallery";
import "pro-gallery/dist/statics/main.css";
const Gallery = () => {
  const items = [
    {
      // Image item:
      itemId: "1",
      mediaUrl:
        "https://i.picsum.photos/id/674/200/300.jpg?hmac=kS3VQkm7AuZdYJGUABZGmnNj_3KtZ6Twgb5Qb9ITssY",
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
        "https://i.picsum.photos/id/1003/1181/1772.jpg?hmac=oN9fHMXiqe9Zq2RM6XT-RVZkojgPnECWwyEF1RvvTZk",
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
      mediaUrl: "https://via.placeholder.com/500",
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
    isAutoSlideshow: true,
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
