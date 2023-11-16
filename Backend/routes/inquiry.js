const express = require("express");
const router = express.Router();
const data = require("../data");
const inquiryData = data.inquiry;

router.route("/").post(async (req, res) => {
  try {
    let { patiendId, familyMemId, inquiryMessage } = req.body;
    let createInq = inquiryData.createInquiry(
      patiendId,
      familyMemId,
      inquiryMessage
    );
    res.json(createInq);
  } catch (e) {
    res.status(e.statusCode).json(e.error);
  }
});

router.route("/:patientId").get(async (req, res) => {
  try {
    let patientId = req.params.patientId;
    let getAllInquiries = inquiryData.getInquiry(patientId);
    res.json(getAllInquiries);
  } catch (e) {
    res.status(e.statusCode).json(e.error);
  }
});

module.exports = router;
