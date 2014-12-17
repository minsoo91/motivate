class CreatePositiveQuotes < ActiveRecord::Migration
  def change
    create_table :positive_quotes do |t|
      t.string :quote, null: false
      t.string :source, null: false
    end
  end
end
