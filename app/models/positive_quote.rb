class PositiveQuote < ActiveRecord::Base
	validates :quote, :source, presence: true
	scope :randomly_select_one, -> { find(Random.rand(PositiveQuote.count + 1)) }
end