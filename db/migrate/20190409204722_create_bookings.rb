class CreateBookings < ActiveRecord::Migration[5.1]
  def change
    create_table :bookings do |t|
      t.integer :status, default: 0

      t.timestamps
    end
  end
end
