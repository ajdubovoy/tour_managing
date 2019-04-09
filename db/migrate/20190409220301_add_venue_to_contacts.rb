class AddVenueToContacts < ActiveRecord::Migration[5.1]
  def change
    add_reference :contacts, :venue, foreign_key: true
  end
end
