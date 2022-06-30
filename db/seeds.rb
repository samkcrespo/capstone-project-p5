puts 'Seeding users 🌱'

user1 = User.create!(first_name: 'John', last_name: 'Doe', email: 'john@example.com', password: 'password')
user2 = User.create!(first_name: 'Sarah', last_name: 'Smith', email: 'sarah@example.com', password: 'password')
user3 = User.create!(first_name: 'Kelly', last_name: 'Doe', email: 'kelly@example.com', password: 'password')
user4 = User.create!(first_name: 'Sam', last_name: 'Crespo', email: 'sam@example.com', password: 'password')

puts 'Users seeded successfully! 👤✔️'