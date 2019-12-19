create table inventory (
inventory_id SERIAL primary key,
item_name TEXT NOT null,
item_desc TEXT NOT null,
item_count int NOT null,
item_time_added timestamptz
)