"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Router = require("koa-router");
const banner_controller_1 = require("../controller/banner.controller");
const router = new Router();
router.get('banners', banner_controller_1.BannerController.getIndexBanners);
router.get('banners/:id', banner_controller_1.BannerController.getBannerFromId);
router.post('admin_banners', banner_controller_1.BannerController.adminCreateBanner);
router.get('admin_banners/communities/:id', banner_controller_1.BannerController.adminGetBannersFromCommunity);
router.del('admin_banners/:id', banner_controller_1.BannerController.adminDeleteBanner);
exports.bannerRouter = router;
//# sourceMappingURL=banner.router.js.map