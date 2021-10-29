# This file is seeding data that should be removed once site is completed.
# Passwords are not secure with the seeds below.

# Parent.delete_all
# Student.delete_all
# CafeteriaMenu.delete_all

puts 'seeding Parents...'

julie = Parent.create(first_name: 'Julie', last_name: 'Meng', username: 'JMeng', password_digest: BCrypt::Password.create('password12345'))
chaim = Parent.create(first_name: 'Chaim', last_name: 'Chazan', username: 'CChazan', password_digest: BCrypt::Password.create('password98765'))
paul = Parent.create(first_name: 'Paul', last_name: 'Ghayad', username: 'PGhayad', password_digest: BCrypt::Password.create('password'))

puts 'seeding Students...'

andy = Student.create(first_name: 'Andy', last_name: 'Anguilar', username: 'AAnguilar', password_digest: BCrypt::Password.create('password'), parent: julie)
dakota = Student.create(first_name: 'Dakota', last_name: 'Martinez', username: 'DMartinez', password_digest: BCrypt::Password.create('password'), parent: paul)
cody = Student.create(first_name: 'Cody', last_name: 'Green', username: 'CGreen', password_digest: BCrypt::Password.create('password'), parent: julie)
blake = Student.create(first_name: 'Blake', last_name: 'Long', username: 'BLong', password_digest: BCrypt::Password.create('password'), parent: chaim)
aysan = Student.create(first_name: 'aysan', last_name: 'aysan', username: 'aysan', password_digest: BCrypt::Password.create('password'), parent: chaim)
puts 'seeding CafeteriaMenu...'

pancakes = CafeteriaMenu.create(meal: 'Breakfast', item: 'pancakes', picture: 'https://i.pinimg.com/originals/2a/92/70/2a9270822ae30fbd8c25b928df0d7fcc.jpg', parent_id: 2)
cereal = CafeteriaMenu.create(meal: 'Breakfast', item: 'Cereal', picture: 'https://nypost.com/wp-content/uploads/sites/2/2015/12/011311lunch8cr.jpg?quality=80&strip=all',parent_id: 2)
eggs = CafeteriaMenu.create(meal: 'Breakfast', item: 'eggs', picture: 'https://preview.redd.it/dlwis50sfi801.jpg?auto=webp&s=4a38ac175964b074f6b0862d7c5daf833fdd545c',  parent_id: 2)
chips = CafeteriaMenu.create(meal: 'Snack', item: 'Chips', picture: 'http://p2cdn4static.sharpschool.com/UserFiles/Servers/Server_1057924/Image/Cafeteria/IMG_1297_thumb.jpg',  parent_id: 2)
cookies = CafeteriaMenu.create(meal: 'Snack', item: 'Cookies', picture: 'https://pbs.twimg.com/media/CvS4-6YWcAAywLE.jpg', parent_id: 1)
carrots = CafeteriaMenu.create(meal: 'Snack', item: 'Carrots', picture: 'https://eating-made-easy.com/wp-content/uploads/2013/11/24.jpg',  parent_id: 1)
pizza = CafeteriaMenu.create(meal: 'Lunch', item: 'Pizza', picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQ54V9WGOzZ6Vl43QCQgDqL6JMvSm0l5zbw&usqp=CAU',  parent_id: 2)
chicken_nuggets = CafeteriaMenu.create(meal: 'Lunch', item: 'Chicken Nuggets', picture: 'https://www.kcrw.com/culture/shows/good-food/school-lunch-the-man-who-couldn2019t-eat-hunting-in-mongolia/School_Lunch_Nuggets.jpg/image_preview', parent_id: 2)
salad = CafeteriaMenu.create(meal: 'Lunch', item: 'Salad', picture: 'https://www.actionforhealthykids.org/wp-content/uploads/2019/05/pic-SaladBar.jpg', parent_id: 2)
hamburger = CafeteriaMenu.create(meal: 'Lunch', item: 'Hamburger', picture: 'https://www.rlsmedia.com/sites/default/files/styles/large/public/field/image/article/dsc02626.jpg?itok=anCsoDej', parent_id: 2)
fish = CafeteriaMenu.create(meal: 'Lunch', item: 'Fish', picture: 'https://i.pinimg.com/originals/17/4c/70/174c706cc5fd3e2f3d38b3b69d9a633c.jpg', parent_id: 2)
water = CafeteriaMenu.create(meal:'Beverage', item: 'Water', picture: 'https://bhsregister.com/wp-content/uploads/2017/02/plastic_water_bottles-01.jpg', parent_id: 2)
soda = CafeteriaMenu.create(meal:'Beverage', item: 'Soda', picture: 'https://i.redd.it/jly9m8aoos131.jpg', parent_id: 2)


puts 'seeding Parent Selections...'
lunch1 = ParentSelection.create(cafeteria_menu: pizza, student_id: 1)
lunch2 = ParentSelection.create(cafeteria_menu: fish, student_id: 1)
lunch3 = ParentSelection.create(cafeteria_menu: salad, student_id: 2)
beverage1 = ParentSelection.create(cafeteria_menu: water, student_id: 2)
breakfast1 = ParentSelection.create(cafeteria_menu: eggs, student_id: 3)

# puts 'seeding Student Selections...'
# SLunch1 = StudentSelection.create(parent_selection: lunch1, student: andy)
# SLunch3 = StudentSelection.create(parent_selection: lunch1, student: cody)
# SBeverage1 = StudentSelection.create(parent_selection: beverage1, student: andy)
# SLunch2 = StudentSelection.create(parent_selection: lunch2, student: blake)