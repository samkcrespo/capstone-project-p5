puts 'Seeding users 🌱'
puts 'Seeding books 🌱'

user1 = User.create!(username: 'johndoe', first_name: 'John', last_name: 'Doe', email: 'john@example.com', password: 'password')
user2 = User.create!(username: 'sarahsmith', first_name: 'Sarah', last_name: 'Smith', email: 'sarah@example.com', password: 'password')
user3 = User.create!(username: 'kellydoe', first_name: 'Kelly', last_name: 'Doe', email: 'kelly@example.com', password: 'password')
user4 = User.create!(username: 'samcrespo', first_name: 'Sam', last_name: 'Crespo', email: 'sam@example.com', password: 'password')
user5 = User.create!(username: 'starlight', first_name: 'Annie', last_name: 'January', email: 'starlight@example.com', password: 'password')
user6 = User.create!(username: 'butcher', first_name: 'Billy', last_name: 'Butcher', email: 'butcher@example.com', password: 'password')
user7 = User.create!(username: 'hughie', first_name: 'Hughie', last_name: 'Cam', email: 'hughie@example.com', password: 'password')
user8 = User.create!(username: 'thedeep', first_name: 'Kevin', last_name: 'Moskowitz', email: 'thedeep@example.com', password: 'password')
user9 = User.create!(username: 'victorianeuman', first_name: 'Victoria', last_name: 'Neuman', email: 'victoria@example.com', password: 'password')
user10 = User.create!(username: 'Frenchie', first_name: 'Sergei', last_name: 'Frenchie', email: 'frenchie@example.com', password: 'password')
user11 = User.create!(username: 'homelander', first_name: 'John', last_name: 'Gillman', email: 'homelander@example.com', password: 'password')
user12 = User.create!(username: 'kimikomiyashiro', first_name: 'Kimiko', last_name: 'Miyashiro', email: 'kimiko@example.com', password: 'password')
user13 = User.create!(username: 'A-Train', first_name: 'Reggie', last_name: 'Franklin', email: 'atrain@example.com', password: 'password')
user14 = User.create!(username: 'queenmaeve', first_name: 'Maggie', last_name: 'Shaw', email: '@example.com', password: 'password')
user15 = User.create!(username: 'Mothers Milk', first_name: 'Marvin', last_name: 'Milk', email: '@example.com', password: 'password')
user16 = User.create!(username: 'blacknoir', first_name: 'Earving', last_name: 'Noir', email: 'blacknoir@example.com', password: 'password')
user17 = User.create!(username: 'Soldier Boy', first_name: 'Ben', last_name: 'SB', email: 'ben@example.com', password: 'password')
user18 = User.create!(username: 'ashleyb', first_name: 'Ashley', last_name: 'Barrett', email: 'ashley@example.com', password: 'password')
user19 = User.create!(username: 'stanedgar', first_name: 'Stan', last_name: 'Edgar', email: 'stan@example.com', password: 'password')
user20  = User.create!(username: 'beccabutcher', first_name: 'Becca', last_name: 'Butcher', email: 'becca@example.com', password: 'password')

book1 = Book.create!(title: "The Naked Don't Fear the Water", author:"Matthieu Aikins", image_url:"https://images-us.bookshop.org/ingram/9780063058583.jpg?height=500&v=v2-31000000000000000000000000000000", description: "In 2016, Canadian journalist Matthieu Aikins went undercover, forgoing his passport and identity, to join his Afghan friend Omar who was fleeing his war-torn country and leaving the woman he loved behind. Their harrowing experience is the basis for Aikins’ book The Naked Don’t Fear the Water, which chronicles the duo’s dangerous and emotional journey on the refugee trail from Afghanistan to Europe. As they are confronted with the many realities of war, Aikins spares no details in his urgent and empathetic narrative.", genres: "Personal Narrative", pages: 331);

book2 = Book.create!(title: "An Emotion of Great Delight", author:"Tahereh Mafi", image_url:"https://i.harperapps.com/covers/9780062972415/x450.jpg", description: "From bestselling and National Book Award–nominated author Tahereh Mafi comes a stunning novel about love and loneliness, navigating the hyphen of dual identity, and reclaiming your right to joy—even when you’re trapped in the amber of sorrow.", genres: ["Young Adult Fiction", "Social Themes", "Religion & Faith"], pages: 256);

book3 = Book.create!(title: "Grown", author:"Tiffany D. Jackson", image_url:"https://i.harperapps.com/covers/9780062840356/x300.jpg", description: "When legendary R&B artist Korey Fields spots Enchanted Jones at an audition, her dreams of being a famous singer take flight. Until Enchanted wakes up with blood on her hands and zero memory of the previous night. Who killed Korey Fields?", genres: ["Thrillers & Suspense"], pages: 384);

book4 = Book.create!(title: "Beautiful World, Where Are You", author:"Sally Rooney", image_url:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1618329605l/56597885.jpg", description: "Alice, a novelist, meets Felix, who works in a warehouse, and asks him if he’d like to travel to Rome with her. In Dublin, her best friend, Eileen, is getting over a break-up and slips back into flirting with Simon, a man she has known since childhood. Alice, Felix, Eileen, and Simon are still young—but life is catching up with them. They desire each other, they delude each other, they get together, they break apart. They have sex, they worry about sex, they worry about their friendships and the world they live in. Are they standing in the last lighted room before the darkness, bearing witness to something? Will they find a way to believe in a beautiful world?", genres: ["Literary Fiction", "Romance"], pages: 356)
book5 = Book.create!(title: "The Last Thing He Told Me", author:"Laura Dave", image_url:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1628623381l/58744977._SY475_.jpg", description: "Laura Dave wins this year’s Mystery & Thriller award for The Last Thing He Told Me, in which a mother and her stepdaughter try to unwind a lethally knotted secret. When Owen Michaels disappeared, he left his new wife, Hannah, a single cryptic message: Protect her. The note clearly refers to Bailey, Owen’s 16-year-old daughter. But why? The U.S. Marshals want to know, too.", genres: ["Mystery", "Thriller"], pages: 307)

puts "books seeded successfully"

puts "Book Clubs seeded successfully"

club1 = BookClub.create!(name:"All Booked", image_url: "https://www.dcl.org/book-clubs/book-clubs.jpg")
club2 = BookClub.create!(name:"Shelf Indulgence", image_url: "https://cdn.shopify.com/s/files/1/0172/1910/products/IdealBookshelf1042-BannedBooks_72dpiDS_990x.jpg?v=1641076948")
club3 = BookClub.create!(name: "Fiction Addiction", image_url: "https://res.cloudinary.com/teepublic/image/private/s--BbiOHys7--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_aac0eb,e_outline:48/co_aac0eb,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1586776957/production/designs/9078193_0.jpg")
club4 = BookClub.create!(name:"Mimosas & Metaphors", image_url: "https://tremento.com/wp-content/uploads/2021/09/The-Mimosa-Club-1.png" )
club5 = BookClub.create!(name:"Page Turners", image_url: "https://stdennisparish.org/wp-content/uploads/OrganizationActivities_BookClub.jpg")

user1 = User.create!(username: 'johndoe', first_name: 'John', last_name: 'Doe', email: 'john@example.com', password: 'password')
user2 = User.create!(username: 'sarahsmith', first_name: 'Sarah', last_name: 'Smith', email: 'sarah@example.com', password: 'password')
user3 = User.create!(username: 'kellydoe', first_name: 'Kelly', last_name: 'Doe', email: 'kelly@example.com', password: 'password')
user4 = User.create!(username: 'samcrespo', first_name: 'Sam', last_name: 'Crespo', email: 'sam@example.com', password: 'password')
user5 = User.create!(username: 'Frenchie', first_name: 'Sergei', last_name: 'Frenchie', email: 'frenchie@example.com', password: 'password')
user6 = User.create!(username: 'butcher', first_name: 'Billy', last_name: 'Butcher', email: 'butcher@example.com', password: 'password')
user7 = User.create!(username: 'hughie', first_name: 'Hughie', last_name: 'Cam', email: 'hughie@example.com', password: 'password')
user8 = User.create!(username: 'kimikomiyashiro', first_name: 'Kimiko', last_name: 'Miyashiro', email: 'kimiko@example.com', password: 'password')
user9 = User.create!(username: 'victorianeuman', first_name: 'Victoria', last_name: 'Neuman', email: 'victoria@example.com', password: 'password')
user10 = User.create!(username: 'starlight', first_name: 'Annie', last_name: 'January', email: 'starlight@example.com', password: 'password')
user11 = User.create!(username: 'homelander', first_name: 'John', last_name: 'Gillman', email: 'homelander@example.com', password: 'password')
user12 = User.create!(username: 'thedeep', first_name: 'Kevin', last_name: 'Moskowitz', email: 'thedeep@example.com', password: 'password')
user13 = User.create!(username: 'A-Train', first_name: 'Reggie', last_name: 'Franklin', email: 'atrain@example.com', password: 'password')
user14 = User.create!(username: 'queenmaeve', first_name: 'Maggie', last_name: 'Shaw', email: '@example.com', password: 'password')
user15 = User.create!(username: 'Mothers Milk', first_name: 'Marvin', last_name: 'Milk', email: '@example.com', password: 'password')
user16 = User.create!(username: 'blacknoir', first_name: 'Earving', last_name: 'Noir', email: 'blacknoir@example.com', password: 'password')
user17 = User.create!(username: 'Soldier Boy', first_name: 'Ben', last_name: 'SB', email: 'ben@example.com', password: 'password')
user18 = User.create!(username: 'ashleyb', first_name: 'Ashley', last_name: 'Barrett', email: 'ashley@example.com', password: 'password')
user19 = User.create!(username: 'stanedgar', first_name: 'Stan', last_name: 'Edgar', email: 'stan@example.com', password: 'password')
user20  = User.create!(username: 'beccabutcher', first_name: 'Becca', last_name: 'Butcher', email: 'becca@example.com', password: 'password')

  BookClubUser.create!(user: user1, book_club: club1, admin?: false)
  BookClubUser.create!(user: user2, book_club: club1, admin?: false)
  BookClubUser.create!(user: user3, book_club: club1, admin?: false)
  BookClubUser.create!(user: user4, book_club: club1, admin?: true)
  BookClubUser.create!(user: user5, book_club: club2, admin?: false)
  BookClubUser.create!(user: user6, book_club: club2, admin?: true)
  BookClubUser.create!(user: user7, book_club: club2, admin?: false)
  BookClubUser.create!(user: user8, book_club: club2, admin?: false)
  BookClubUser.create!(user: user9, book_club: club3, admin?: false)
  BookClubUser.create!(user: user10, book_club: club3, admin?: false)
  BookClubUser.create!(user: user11, book_club: club3, admin?: true)
  BookClubUser.create!(user: user12, book_club: club3, admin?: false)
  BookClubUser.create!(user: user13, book_club: club4, admin?: true)
  BookClubUser.create!(user: user14, book_club: club4, admin?: false)
  BookClubUser.create!(user: user15, book_club: club4, admin?: false)
  BookClubUser.create!(user: user16, book_club: club4, admin?: false)
  BookClubUser.create!(user: user17, book_club: club5, admin?: false)
 BookClubUser.create!(user: user18, book_club: club5, admin?: true)
  BookClubUser.create!(user: user19, book_club: club5, admin?: false)
 BookClubUser.create!(user: user20, book_club: club5, admin?: false)

puts 'Users & Book Club Users seeded successfully! 👤✔️'
puts 'Book Club Books seeded successfully!'
 bcb1 = BookClubBook.create!(book: book1, book_club: club2, botm?: true, rating: 4)
 bcb2 = BookClubBook.create!(book: book2, book_club: club3, botm?: true, rating:5)
 bcb3 = BookClubBook.create!(book: book3, book_club: club1, botm?: true, rating:4)
 bcb4 = BookClubBook.create!(book: book4, book_club: club4, botm?: true, rating:5)
 bcb5 = BookClubBook.create!(book: book5, book_club: club5, botm?: true, rating:2)

 puts "Comments seeded successfully"

     Comment.create!(book_club_book: bcb1, user: user5, comment: "Unforgettable —unbelievable— extraordinary — riveting storytelling!")
     Comment.create!(book_club_book: bcb1, user: user6 , comment:"Oi! Great book")
     Comment.create!(book_club_book: bcb2, user: user11, comment:"It's an ok book, I could write a better one.")
     Comment.create!(book_club_book: bcb2, user: user10 , comment:"Loved this book - Really sparked my interest")
     Comment.create!(book_club_book: bcb3, user: user3, comment:"This book is just WOW. Its perfect for today's society and relatable to young ladies everywhere. Enchanted's situation just literally baffled me. AND THE ENDING AHHHH.")
     Comment.create!(book_club_book: bcb4, user: user14 , comment: "Really good work. Love the style. I liked the literary references and the reflections on the (crisis of the) novel, modernity and capitalism, and how the system is creeping into our minds.")
     Comment.create!(book_club_book: bcb5 , user: user20 , comment: "Wow. The cigarette smoking mobster who works for “the organization “ with bodyguards who wear tight suits makes a deal with a woman he’s never met after decades of anger and resentment? Um, ok. This book is predictable and unbelievable. And the excessive use of “it stops me” and dramatic fragment sentences are tedious. Not recommended.")
     Comment.create!(book_club_book: bcb5, user: user18 , comment: "This book was mildly intriguing but the ending fell flat. I believe Bailey would have given up everything to be with her father, no matter the risk. There wasn’t very much action either. Lots of contrived drama between Bailey and Hanna. It was an easy read so maybe take it for a long flight")


