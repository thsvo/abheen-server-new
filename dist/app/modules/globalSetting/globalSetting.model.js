"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalSettingModel = void 0;
const mongoose_1 = require("mongoose");
const global_interface_1 = require("../../interface/global/global.interface");
const globalSettingSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        default: "Viscart",
    },
    description: {
        type: String,
        trim: true,
        default: "Viscart Description",
    },
    businessNumber: {
        type: String,
        trim: true,
        default: "Viscart Number",
    },
    businessAddress: {
        type: String,
        trim: true,
        default: "Viscart Address",
    },
    deliveryChargeInsideDhaka: {
        type: String,
        trim: true,
        default: "50",
    },
    deliveryChargeOutsideDhaka: {
        type: String,
        trim: true,
        default: "100",
    },
    businessLocation: {
        type: String,
        trim: true,
        default: "Viscart Location",
    },
    businessSlogan: {
        type: String,
        trim: true,
        default: "Viscart Slogan",
    },
    businessEmail: {
        type: String,
        trim: true,
        default: "Viscart Email",
    },
    businessFacebook: {
        type: String,
        trim: true,
        default: "Viscart Facebook",
    },
    businessInstagram: {
        type: String,
        trim: true,
        default: "Viscart Instagram",
    },
    deliveryApiKey: {
        type: String,
        trim: true,
        default: "Viscart Api Key",
    },
    deliverySecretKey: {
        type: String,
        trim: true,
        default: "Viscart Secret Key",
    },
    businessTwitter: {
        type: String,
        trim: true,
        default: "Viscart Twitter",
    },
    businessLinkedin: {
        type: String,
        trim: true,
        default: "Viscart Linkedin",
    },
    businessYoutube: {
        type: String,
        trim: true,
        default: "Viscart Linkedin",
    },
    businessWhatsapp: {
        type: String,
        trim: true,
        default: "Viscart Whatsapp",
    },
    businessWorkHours: {
        type: String,
        trim: true,
        default: "Viscart Work Hours",
    },
    primaryColor: { type: String, default: "" },
    secondaryColor: { type: String, default: "" },
    logo: { type: String, default: "" },
    favicon: { type: String, default: "" },
    currency: { type: String, default: "BDT" },
    ssl: { type: String, default: "Active" },
    status: {
        type: String,
        enum: Object.values(global_interface_1.Status),
        trim: true,
        default: global_interface_1.Status.ACTIVE,
    },
}, { timestamps: true });
exports.globalSettingModel = (0, mongoose_1.model)("globalSetting", globalSettingSchema);
