puts 'Seeding users 🌱'
puts 'Seeding books 🌱'

user1 = User.create!(username: 'johndoe', first_name: 'John', last_name: 'Doe', email: 'john@example.com', password: 'password')
user2 = User.create!(username: 'sarahsmith', first_name: 'Sarah', last_name: 'Smith', email: 'sarah@example.com', password: 'password')
user3 = User.create!(username: 'kellydoe', first_name: 'Kelly', last_name: 'Doe', email: 'kelly@example.com', password: 'password')
user4 = User.create!(username: 'samcrespo', first_name: 'Sam', last_name: 'Crespo', email: 'sam@example.com', password: 'password')

book1 = Book.create!(title: "The Naked Don't Fear the Water", author:"Matthieu Aikins", image_url:"https://images-us.bookshop.org/ingram/9780063058583.jpg?height=500&v=v2-31000000000000000000000000000000", description: "In 2016, Canadian journalist Matthieu Aikins went undercover, forgoing his passport and identity, to join his Afghan friend Omar who was fleeing his war-torn country and leaving the woman he loved behind. Their harrowing experience is the basis for Aikins’ book The Naked Don’t Fear the Water, which chronicles the duo’s dangerous and emotional journey on the refugee trail from Afghanistan to Europe. As they are confronted with the many realities of war, Aikins spares no details in his urgent and empathetic narrative.", genres: "Personal Narrative", pages: 331);

puts 'Users seeded successfully! 👤✔️'