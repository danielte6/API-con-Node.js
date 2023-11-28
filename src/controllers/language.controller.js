import { getConnection } from "../database/database";

const getalimentos = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT id, nombredelproducto, preciodelproducto FROM alimentos");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const getalimento = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT id, nombredelproducto, preciodelproducto FROM alimentos WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const addalimento = async (req, res) => {
    try {
        const { nombredelproducto, preciodelproducto } = req.body;

        if (nombredelproducto === undefined || preciodelproducto === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }

        const alimentos = { nombredelproducto, preciodelproducto };
        const connection = await getConnection();
        await connection.query("INSERT INTO alimentos SET ?", alimentos);
        res.json({ message: "alimentos added" });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const updatealimento = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombredelproducto, preciodelproducto } = req.body;

        if (id === undefined || nombredelproducto === undefined || preciodelproducto === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }

        const alimentos = { nombredelproducto, preciodelproducto };
        const connection = await getConnection();
        const result = await connection.query("UPDATE alimentos SET ? WHERE id = ?", [alimentos, id]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const deletealimento = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM alimentos WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const methods = {
    getalimentos,
    getalimento,
    addalimento,
    updatealimento,
    deletealimento
};
