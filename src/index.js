import proj4 from 'namlun-proj4';
import {
  N_DEC_VN2000,
  N_DEC_WGS84,
  N_DEC_H,
  EPSG_WGS84,
  EPSG_VN2000_DEFS,
  N_DEC_HN72,
  EPSG_HN72_DEFS
} from "./config";

const validate = (x, y, h, province, validateProvince = false) => {
    if (isNaN(x) || isNaN(y) || isNaN(h)) {
        console.error("Input error!");
        return false;
    }
    if (validateProvince && (!province || !Object.keys(EPSG_VN2000_DEFS).includes(province))) {
        console.error("Province invalid! Please call `list_province()` to show all");
        return false;
    }
    return true;
}

const converter = (x, y, h, from, to) => {
    const proj4Src = new proj4.Proj(from);
    const proj4Dest = new proj4.Proj(to);

    const toMerterSrc = proj4Src.to_meter || 1;
    const toMeterDest = proj4Dest.to_meter || 1;
    const xVal = x / toMerterSrc;
    const yVal = y / toMerterSrc;
    const hVal = h / toMerterSrc;

    const pj = new proj4.toPoint([xVal, yVal, hVal]);
    const result = proj4(proj4Src, proj4Dest).forward(pj);
    result.x *= toMeterDest;
    result.y *= toMeterDest;
    result.z *= toMeterDest;

    return result;
}

export const list_province = () => {
    return Object.keys(EPSG_VN2000_DEFS);
}

export const vn2000_to_wgs84 = (dx, dy, h, province) => {
    if(!validate(dx, dy, h, province, true)) return;

    // init defs
    proj4.defs(province, EPSG_VN2000_DEFS[province].trim());

    const {x, y, z} = converter(parseFloat(dx), parseFloat(dy), h, province, EPSG_WGS84);

    return {
        x: x.toFixed(N_DEC_WGS84),
        y: y.toFixed(N_DEC_WGS84),
        h: z.toFixed(N_DEC_H),
    }
}

export const wgs84_to_vn2000 = (dx, dy, h, province) => {
    if(!validate(dx, dy, h, province, true)) return;

    // init defs
    proj4.defs(province, EPSG_VN2000_DEFS[province].trim());

    const {x, y, z} = converter(parseFloat(dx), parseFloat(dy), h, EPSG_WGS84, province);

    return {
        x: x.toFixed(N_DEC_VN2000),
        y: y.toFixed(N_DEC_VN2000),
        h: z.toFixed(N_DEC_VN2000),
    }
}

export const hn72_to_wgs84 = (dx, dy, h) => {
  if(!validate(dx, dy, h)) return;

  // init defs
  const hn72 = 'hn72';
  proj4.defs(hn72, EPSG_HN72_DEFS);

  const {x, y, z} = converter(parseFloat(dx), parseFloat(dy), h, hn72, EPSG_WGS84);

  return {
    x: x.toFixed(N_DEC_WGS84),
    y: y.toFixed(N_DEC_WGS84),
    h: z.toFixed(N_DEC_H),
  }
}

export const wgs84_to_hn72 = (dx, dy, h) => {
  if(!validate(dx, dy, h)) return;

  // init defs
  const hn72 = 'hn72';
  proj4.defs(hn72, EPSG_HN72_DEFS);

  const {x, y, z} = converter(parseFloat(dx), parseFloat(dy), h, EPSG_WGS84, hn72);

  return {
    x: x.toFixed(N_DEC_HN72),
    y: y.toFixed(N_DEC_HN72),
    h: z.toFixed(N_DEC_H),
  }
}
