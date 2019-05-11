SELECT id,
       title,
       description,
       price,
       view_count,
       created_on,
       img
FROM items
ORDER BY created_on
LIMIT 10;