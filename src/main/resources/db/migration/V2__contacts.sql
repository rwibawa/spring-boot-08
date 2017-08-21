create table contact (
  id int identity primary key,
  customer_id int not null,
  name varchar (255) not null,
  email varchar (255) not null,
  phone varchar (255) not null,
  constraint contact_customer_fk
    foreign key (customer_id)
    references customer (id)
);

insert into contact (customer_id, name, email, phone)
  select id, contact_name, email, phone from customer;

alter table customer drop column contact_name;
alter table customer drop column email;
alter table customer drop column phone;

insert into contact (customer_id, name, email, phone) values
  (1, 'Jane Doe', 'jane.doe@cocacola.com', '202-555-0144'),
  (2, 'Chrystal Frapples', 'chrystal.frapples@dell.com', '202-555-0181');
