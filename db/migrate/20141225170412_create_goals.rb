class CreateGoals < ActiveRecord::Migration
  def change
    create_table :goals do |t|
    	t.integer :user_id
    	t.string :body, null: false
    end
  end
end
