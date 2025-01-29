import { sub } from "date-fns";

import { ASSETS_API } from "src/config-global";

import {
  _id,
  _ages,
  _roles,
  _prices,
  _emails,
  _ratings,
  _nativeS,
  _nativeM,
  _nativeL,
  _percents,
  _booleans,
  _sentences,
  _lastNames,
  _fullNames,
  _tourNames,
  _jobTitles,
  _taskNames,
  _postTitles,
  _firstNames,
  _fullAddress,
  _companyNames,
  _productNames,
  _descriptions,
  _phoneNumbers,
  _ftsNames,
  _ftsTypes,
  _operationTypes,
  _tankName,
  _fuelType,
  _tankStatus,
  _tankNumber
} from "./assets";

// ----------------------------------------------------------------------

export const _mock = {
  id: (index) => _id[index],
  time: (index) => sub(new Date(), { days: index, hours: index }),
  boolean: (index) => _booleans[index],
  role: (index) => _roles[index],
  // Text
  taskNames: (index) => _taskNames[index],
  postTitle: (index) => _postTitles[index],
  jobTitle: (index) => _jobTitles[index],
  tourName: (index) => _tourNames[index],
  productName: (index) => _productNames[index],
  sentence: (index) => _sentences[index],
  description: (index) => _descriptions[index],
  // Contact
  email: (index) => _emails[index],
  phoneNumber: (index) => _phoneNumbers[index],
  fullAddress: (index) => _fullAddress[index],
  // Name
  firstName: (index) => _firstNames[index],
  lastName: (index) => _lastNames[index],
  fullName: (index) => _fullNames[index],
  companyName: (index) => _companyNames[index],
  ftsNames : (index) => _ftsNames[index],
  ftsTypes: (index) => _ftsTypes[index],
  operationType: (index) => _operationTypes[index],
  tankName: (index) => _tankName[index],
  fuelType: (index) => _fuelType[index],
  tankStatus: (index) => _tankStatus[index],
  tankNumber: (index) => _tankNumber[index],
  // Number
  number: {
    percent: (index) => _percents[index],
    rating: (index) => _ratings[index],
    age: (index) => _ages[index],
    price: (index) => _prices[index],
    nativeS: (index) => _nativeS[index],
    nativeM: (index) => _nativeM[index],
    nativeL: (index) => _nativeL[index],
  },
  // Image
  image: {
    cover: (index) =>
      `${ASSETS_API}/assets/images/cover/cover_${index + 1}.jpg`,
    avatar: (index) =>
      `${ASSETS_API}/assets/images/avatar/avatar_${index + 1}.jpg`,
    travel: (index) =>
      `${ASSETS_API}/assets/images/travel/travel_${index + 1}.jpg`,
    company: (index) =>
      `${ASSETS_API}/assets/images/company/company_${index + 1}.png`,
    product: (index) =>
      `${ASSETS_API}/assets/images/m_product/product_${index + 1}.jpg`,
    portrait: (index) =>
      `${ASSETS_API}/assets/images/portrait/portrait_${index + 1}.jpg`,
  },
};
