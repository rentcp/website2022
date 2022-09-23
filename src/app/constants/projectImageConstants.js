const projectImages = {
  satellite: require.context(`../../assets/images/projectImages/satellite`, false, /.*\.png$/),
  arxiv: require.context(`../../assets/images/projectImages/arxiv`, false, /.*\.png$/),
  om1: require.context(`../../assets/images/projectImages/om1`, false, /.*\.png$/),
  colex: require.context(`../../assets/images/projectImages/colex`, false, /.*\.jpg$/),
  tsp1: require.context(`../../assets/images/projectImages/tsp1`, false, /.*\.png$/),
  feynman: require.context(`../../assets/images/projectImages/feynman`, false, /.*\.jpg$/),
  atomic: require.context(`../../assets/images/projectImages/atomic`, false, /.*\.png$/),
  hamming: require.context(`../../assets/images/projectImages/hamming`, false, /.*\.jpg$/),
  pi: require.context(`../../assets/images/projectImages/pi`, false, /.*\.png$/),
  physics: require.context(`../../assets/images/projectImages/physics`, false, /.*\.jpg$/),
  work: require.context(`../../assets/images/projectImages/work`, false, /.*\.png$/),
  books: require.context(`../../assets/images/projectImages/books`, false, /.*\.png$/),
};

export const getProjectImages = id => {
  if (!id) return [];

  const images = projectImages[id];
  const extractedImages = [];

  images.keys().forEach((key, index) => {
    const image = images(key);
    // extracts filename with extension for id
    const id = key
      .substring(0, key.lastIndexOf("."))
      .substring(key.lastIndexOf("/") + 1);

    extractedImages.push({ image, id, index });
  });
  return extractedImages;
};

// used to explicitly specify a image ratio to be show in grid
export const imageSpecificRatio = {
  feynman: [{ id: "1", ratioWidth: 3, ratioHeight: 1 }],
  benefactory: [{ id: '1', ratioWidth: 2, ratioHeight: 1 }],
  nykaa: [
     {id: '1', ratioWidth: 3, ratioHeight: 1},
     {id: '5', ratioWidth: 3, ratioHeight: 1},
  ]
};
