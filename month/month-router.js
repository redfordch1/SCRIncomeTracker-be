const router = require("express").Router();
const monthlyTotals = require("./month-model.js");

//* ============================ ROUTE FOR NEW TOTAL ===============================
router.post("/", (req, res) => {
  const newTotal = req.body;
  console.log("This is the new total --> ", newTotal);
  monthlyTotals
    .add(newTotal)
    .then((total) => {
      res.status(201).json({
        total,
        message: "Total was created",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({
        message: "Error creating total",
      });
    });
});
//* ================================================================================

//* ==================== ROUTE FOR GETTING ALL THE USERS TOTALS ====================
router.get("/:id", (req, res) => {
  const userId = req.params.id;
  monthlyTotals
    .findMonthlyTotalsByUserId(userId)
    .then((total) => {
      res.status(201).json(total);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: "error fetching totals",
      });
    });
});
//* =================================================================================

//* ========================= ROUTE FOR UPDATING A TOTAL ============================
router.put("/:id", (req, res) => {
  const id = req.params.id;
  const changes = req.body;
  monthlyTotals
    .updateTotal(id, changes)
    .then((update) => {
      res.status(200).json({
        success: true,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: `error updating total ${id}`,
      });
    });
});
//* =================================================================================

//* ========================= ROUTE FOR DELETING All OF THE USERS TOTALS ============================
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  monthlyTotals
    .remove(id)
    .then((total) => {
      if (total) {
        res.status(200).json({
          message: "month total deleted",
        });
      } else {
        res.status(404).json({
          error: "could not find totals with given ID",
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: `error deleting totals`,
      });
    });
});
//* =================================================================================

module.exports = router;
