"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeUndefinedProperties = void 0;
const removeUndefinedProperties = (obj) => {
    Object.keys(obj).forEach(key => obj[key] === undefined ? delete obj[key] : {});
};
exports.removeUndefinedProperties = removeUndefinedProperties;
//# sourceMappingURL=objects.js.map