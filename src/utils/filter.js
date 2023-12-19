export const Filter = (
  product,
  isFilterColor,
  isFilterCategory,
  nameprod,
  FilterColor,
  FilterCategory
) => {
  if (isFilterColor) {
    if (
      handleFilterColor(
        product,
        isFilterCategory,
        FilterColor,
        FilterCategory,
        nameprod
      )
    ) {
      return true;
    }
    return false;
  }

  if (isFilterCategory) {
    if (handleFilterCategory(product, FilterCategory, nameprod)) {
      return true;
    }
    return false;
  }

  if (nameprod !== undefined && nameprod !== "") {
    if (handleFilterName(product, nameprod)) {
      return true;
    }
    return false;
  }

  return true;
};

const handleFilterColor = (
  product,
  isFilterCategory,
  FilterColor,
  FilterCategory,
  nameprod
) => {
  let k = false;
  FilterColor.forEach((color) => {
    if (color.done && color.name === product.color) {
      k = true;
    }
  });
  if (k) {
    if (isFilterCategory) {
      if (handleFilterCategory(product, FilterCategory, nameprod)) {
        return true;
      }
      return false;
    }
    if (nameprod !== undefined && nameprod !== "") {
      if (handleFilterName(product, nameprod)) {
        return true;
      }
      return false;
    }
    return true;
  }
};

const handleFilterCategory = (product, FilterCategory, nameprod) => {
  let k = false;
  FilterCategory.forEach((category) => {
    if (category.done && category.name === product.category) {
      k = true;
    }
  });
  if (k) {
    if (nameprod !== undefined && nameprod !== "") {
      if (handleFilterName(product, nameprod)) {
        return true;
      }
      return false;
    }
    return true;
  }
  return false;
};

const handleFilterName = (product, nameprod) => {
  if (
    product.name.toLowerCase().includes(nameprod.toLowerCase()) ||
    product.description.toLowerCase().includes(nameprod.toLowerCase())
  ) {
    return true;
  }
  return false;
};
