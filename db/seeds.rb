# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#

if Rails.env.development?
  Note.destroy_all
  Booking.destroy_all
  Band.destroy_all
  Contact.destroy_all
  Venue.destroy_all
  City.destroy_all
  Country.destroy_all
end

20.times do
  country = Country.create!(name: Faker::Address.country)
  city = City.create!(name: Faker::Address.city, country: country)
  venue = Venue.create!(name: Faker::Restaurant.name, city: city)
  contact = Contact.create!(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: Faker::Internet.email, phone: Faker::PhoneNumber.phone_number, venue: venue)
end

5.times do
  band = Band.create!(name: Faker::Music::RockBand.name)
end
