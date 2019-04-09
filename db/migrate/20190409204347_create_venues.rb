class CreateVenues < ActiveRecord::Migration[5.1]
  def change
    create_table :venues do |t|
      t.references :city, foreign_key: true

      t.timestamps
    end
  end
end
