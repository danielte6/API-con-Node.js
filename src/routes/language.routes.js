import { Router } from "express";
import { methods as alimentosController } from "../controllers/language.controller";

const router = Router();

router.get("/", alimentosController.getalimentos);
router.get("/:id", alimentosController.getalimento);
router.post("/", alimentosController.addalimento);
router.put("/:id", alimentosController.updatealimento);
router.delete("/:id", alimentosController.deletealimento);
export default router;
