class CreateTours < ActiveRecord::Migration[5.1]
  def change
    create_table :tours do |t|
      t.references :band, foreign_key: true
      t.date :start_date
      t.date :end_date

      t.timestamps
    end
  end
end
