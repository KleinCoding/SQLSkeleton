INsERT INTO inventory (item_name, item_desc, item_count)
VALUES ($1, $2, $3)
-- RETURNING *;