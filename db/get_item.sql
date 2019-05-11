SELECT i.id,
       i.title,
       i.description,
       i.price,
       i.view_count,
       i.created_on,
       i.img,
       u.name_first,
       u.name_last,
       c.email_address,
       c.phone_number,
       c.city,
       c.state
FROM items AS i
LEFT JOIN item_contacts AS c ON (i.contact_id = c.id)
LEFT JOIN users AS u ON (i.user_id = u.id)
WHERE i.id = $1;