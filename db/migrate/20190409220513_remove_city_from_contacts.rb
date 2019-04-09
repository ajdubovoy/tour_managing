class RemoveCityFromContacts < ActiveRecord::Migration[5.1]
  def change
    remove_reference :contacts, :city, foreign_key: true
  end
end
