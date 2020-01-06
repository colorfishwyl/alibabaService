- SELECT MAX(id) FROM illuminations; -- 获得该表当前最大id值
-- SELECT nextval('"illuminations_id_seq"');  -- 获得该表id自增序列值
 SELECT setval('"illuminations_id_seq"', (SELECT MAX(id) FROM illuminations)); -- 更新设置当前id自增序列值为最大id
--SELECT nextval('"illuminations_id_seq"'); -- 查看下一个id
